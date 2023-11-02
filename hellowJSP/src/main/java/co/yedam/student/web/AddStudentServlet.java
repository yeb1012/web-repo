package co.yedam.student.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;
@WebServlet("/addStudent.do")
public class AddStudentServlet extends HttpServlet{
	//init -> service -> destroy
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//요청정보에 한글처리
		req.setCharacterEncoding("utf-8");
		
				
		String id = req.getParameter("id");
		String password = req.getParameter("password");
		String name = req.getParameter("name");
		String dept = req.getParameter("dept");
		String birth = req.getParameter("birth");
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		
		StudentVO vo = new StudentVO();
		vo.setStudentId(id);
		vo.setStudentPassword(password);
		vo.setStudentName(name);
		vo.setStudentDept(dept);
		System.out.println(birth);
		try{vo.setStudentBirthday(sdf.parse(birth));
			
			}catch(ParseException e) {
				e.printStackTrace();
			}
		
		
		StudentService svc = new StudentServiceImpl();
		//svc.addStudent(vo);
		System.out.println(vo);
		if(svc.addStudent(vo)) {
			//{"retCode":"OK"}
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		}else{
			//{"retCode":"NG"}
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
	}

}//
