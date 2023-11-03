package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;

public class BoardDAO {

	
	//목록,단건조회, 등록, 수정, 삭제
	
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	String sql;
	DataSource ds = DataSource.getInstance();
	
	
	public void close() {
		try {
			if (rs!=null)
				rs.close();
			if( psmt!=null)
				psmt.close();
			if(conn != null)
				conn.close();
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public List<BoardVO> selectList(){
		List<BoardVO> list = new ArrayList <BoardVO>();
		sql = "select*from board order by board_no";
		conn = ds.getConnection();
		try {psmt = conn.prepareStatement(sql);
		rs = psmt.executeQuery();
		while(rs.next()) {
			
			BoardVO vo = new BoardVO();
			vo.setBoardNo(rs.getInt("board_no"));
			vo.setTitle(rs.getString("title"));
			vo.setContent(rs.getString("content"));
			vo.setWriter(rs.getString("writer"));
			vo.setWriteDate(rs.getDate("write_date"));
			vo.setImage(rs.getString("image"));
			vo.setLastUpdate(rs.getDate("last_update"));
			vo.setViewCnt(rs.getInt("view_cnt"));
			list.add(vo);
			
		}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return list;
	}
	
	public BoardVO select(int boardNO) {
		BoardVO vo = new BoardVO();
		sql="select * from board where board_no=? ";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1,boardNO);
			rs = psmt.executeQuery();
			while(rs.next()) {
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setTitle(rs.getString("title"));
				vo.setContent(rs.getString("content"));
				vo.setWriter(rs.getString("writer"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return vo;
	}
	public int insert(BoardVO vo) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		sql="insert into board (board_no, title, content, writer ) "
				+ "values(?,?,?)";
		conn = ds.getConnection();
		
		try {
			psmt = conn.prepareStatement(sql);
			
			psmt.setString(1,vo.getTitle());
			psmt.setString(2,vo.getContent());
			psmt.setString(3,vo.getWriter());
			
			int n = psmt.executeUpdate();
			return n;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	public int update(BoardVO vo) {
		
		sql ="update board set title=?, content=?, image=nvl(?,image),last_update=sysdate where_board_no=?";
		conn= ds.getConnection();
		try {
			psmt= conn.prepareStatement(sql);
			psmt.setString(1,vo.getTitle());
			psmt.setString(2,vo.getContent());
			psmt.setString(3,vo.getImage());
			psmt.setInt(4,vo.getBoardNo());
			int n = psmt.executeUpdate();
			return n;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	public int delete(int boardNo) {
		sql ="delete from board where board_no=?";
		conn=ds.getConnection();
		try {
			psmt=conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			int n= psmt.executeUpdate();
			return n;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		
		return 0;
	}
	
	//조회수 증가
	public int updateCnt(int boardNo) {
		sql="update board set view_cnt=view_cnt+1 where board_no=?";
		conn=ds.getConnection();
		try {
			psmt=conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			int n= psmt.executeUpdate();
			return n;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		
		return 0;
	}
	
}
