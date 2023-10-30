package org.yedam.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;

public class MemberServiceImpl implements MemberService {
	private DataSource dao = DataSource.getInstance();
	private Connection conn;
	private PreparedStatement psmt;

	private void close() {
		try {
			if (psmt != null)
				psmt.close();// 2번닫고
			if (conn != null)
				conn.close();// 1번닫고

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> member = new ArrayList<MemberVO>();
		String sql = "SELECT*FROM MEMBER";
		MemberVO vo;
		try {
			conn = dao.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while (rs.next()) {
				vo = new MemberVO();
				vo.setMid(rs.getString("m_id"));
				vo.setMpassword(rs.getString("m_password"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				member.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return member;
	}

	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "insert into member values(?, ?, ?, ?)";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getMid());
			psmt.setString(2, vo.getMpassword());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getPhone());

			int r = psmt.executeUpdate();// 반환값은 데이터처리 건수
			if (r == 1) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {

			try {
				if (psmt != null)
					psmt.close();// 2번닫고
				if (conn != null)
					conn.close();// 1번닫고

			} catch (SQLException e) {
				e.printStackTrace();
			}

		}

		return false;

	}

	@Override
	public boolean modifyMember(MemberVO vo) {
		String sql = "update member set m_password=?, name=?, phone=? "
				+ "where m_id = ?";
		conn= dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getMpassword());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getPhone());
			psmt.setString(4, vo.getMid());
			int r = psmt.executeUpdate();// 반환값은 데이터처리 건수
			if (r == 1) {
				return true;
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if (psmt != null)
					psmt.close();// 2번닫고
				if (conn != null)
					conn.close();// 1번닫고

			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

}
