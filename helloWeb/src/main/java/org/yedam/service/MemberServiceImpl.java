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
			if(psmt != null) psmt.close();//2번닫고
			if(conn != null) conn.close();//1번닫고
			
		}catch(SQLException e){
			e.printStackTrace();
		}
	}
	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> member = new ArrayList<MemberVO>();
		String sql="SELECT*FROM MEMBER";
		MemberVO vo;
		try{
			conn=dao.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
				while(rs.next()) {
					vo= new MemberVO();
					vo.setMid(rs.getString("m_id"));  
					vo.setMpassword(rs.getString("m_password"));  
					vo.setName(rs.getString("name"));  
					vo.setPhone(rs.getString("phone")); 
					member.add(vo);
				}
				rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return member;
	}

}
