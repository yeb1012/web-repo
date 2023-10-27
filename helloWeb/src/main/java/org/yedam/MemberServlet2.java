package org.yedam;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberServiceImpl;
import org.yedam.service.MemberVO;

/**
 * Servlet implementation class MemberService
 */
@WebServlet("/MemberService2")
public class MemberServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberServlet2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		MemberService svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();		
		System.out.println("JSON데이터 입니다..");
		
		response.setContentType("text/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		//[{"mid"value, "pass":value, "name":value, "phone"value}]
		int cnt = 0;
		String str ="[";
		for(MemberVO vo : list) {
			str += "{";
			str +="\"mid \":\""+vo.getMid()+"\",";
			str +="\"mpassword\":\""+vo.getMid()+"\",";
			str +="\"name\":\""+vo.getName()+"\",";
			str +="\"phone\":\""+vo.getPhone()+"\"";
			str += "}";
			if(++cnt != list.size())
			{str +=",";		}
		}
		str+="]";
		out.print(str);
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}//doGet

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
