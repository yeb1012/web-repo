package co.yedam.student.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

public class StudentDAO {

	DataSource ds = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;

	void close() {
		try {
			if (rs != null)
				rs.close();
			if (psmt != null)
				psmt.close();
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
//삽입
	public int insert(StudentVO vo) {
		String sql = "insert into student(student_id, student_name,student_password, student_dept, student_birthday) "
				+ " values (?,?,?,?,?)";

		conn = ds.getConnection();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(sdf.format(vo.getStudentBirthday()));
		//2012-03-05 Novem-05
		//Date -> String sdf.format();
		//String -> Date sdf.parse("");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getStudentId());
			psmt.setString(2, vo.getStudentName());
			psmt.setString(3, vo.getStudentPassword());
			psmt.setString(4, vo.getStudentDept());
			psmt.setString(5, sdf.format(vo.getStudentBirthday()));
			int n = psmt.executeUpdate();
			return n;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
//수정:update
	public int update(StudentVO vo) {
	String sql = "update student set student_name=?, student_password=?, student_dept=?, student_birthday=? where student_id=? ";
	conn = ds.getConnection();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	try {
		psmt= conn.prepareStatement(sql);
		psmt.setString(1, vo.getStudentName());
		psmt.setString(2, vo.getStudentPassword());
		psmt.setString(3, vo.getStudentDept());
		psmt.setString(4, sdf.format(vo.getStudentBirthday()));
		psmt.setString(5, vo.getStudentId());
		int n = psmt.executeUpdate();
		return n;
	}catch(SQLException e) {
		e.printStackTrace();
	}finally {
		close();
	}
		return 0;
	}
//삭제:delete
	public int delete(String sid) {
	String sql = "delete from student where student_id =?";
	conn = ds.getConnection();
	try {
		psmt = conn.prepareStatement(sql);
		psmt.setString(1,sid);
		int n = psmt.executeUpdate();
		return n;
	}catch(SQLException e) {
		e.printStackTrace();
	}finally {
		close();
	}
		return 0;	
	}
//목록:List	
	public List<StudentVO> list(){
		List<StudentVO> student = new ArrayList <StudentVO>();
		StudentVO vo;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String sql ="select*from student";
		conn= ds.getConnection();
		
		try{
			psmt= conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				vo = new StudentVO();
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentPassword(rs.getString("student_password"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
				
				student.add(vo);
				
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return student;
	}
//조회:Select
	public StudentVO select(String sid) {
		StudentVO vo = new StudentVO();
		String sql ="select *from student where student_id=?";
		conn = ds.getConnection();
		try{
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,sid);
			rs= psmt.executeQuery();
			while(rs.next()) {
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentPassword(rs.getString("student_password"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
				
			}
			rs.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return vo;
	}

}//
