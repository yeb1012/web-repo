package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExam {

	public static void main(String[] args) {
	//학생 아이디, 비밀번호, 이름, 학과, 생일
	StudentVO vo = new StudentVO();
	StudentService svc = new StudentServiceImpl();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	vo.setStudentId("newbie");
	vo.setStudentPassword("1234");
	vo.setStudentName("신입생");
	vo.setStudentDept("영문학과");
	try{vo.setStudentBirthday(sdf.parse("2001-01-01"));
	}catch(ParseException e) {
		e.printStackTrace();
	}
	if(svc.editStudent(vo)) {
		System.out.println("정상등록");
	}else {
	
		System.out.println("에러");}
		

	
	System.out.println(svc.getStudent("hong"));
	svc.listStudent().forEach(student->
	System.out.println(student)
	);
	


}
}//
