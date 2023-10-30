package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberServiceImpl;
import org.yedam.service.MemberVO;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
@WebServlet("/AddMemberServ")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//?mid = M009&mpassword=9999&name=kim&phone=010-9876-5124
		//(mid, pass, name, phone){mid....}
		String mid = request.getParameter("mid");
		String mpassword = request.getParameter("mpassword");
		String name =request.getParameter("name");
		String phone = request.getParameter("phone");
		MemberVO vo = new MemberVO(mid, mpassword, name, phone);//생성자
		MemberService svc = new MemberServiceImpl();
		PrintWriter out =response.getWriter();
		Gson gson = new GsonBuilder().create();
		//String json = gson.toJson(vo);
		
		//Map
		Map<String, Object> map = new HashMap<>();
		
		if(svc.addMember(vo)) {
			//{"retCode":"OK"}
			//out.print("{\"retCode\":\"OK\"}");
			//out.print(json);
			map.put("retCode","OK" );
			map.put("vo", vo);
		}else {
			//{"retCode":"NG"}
			//out.print("{\"retCode\":\"NG\"}");
			//out.print(json);
			map.put("retCode","NG" );
			map.put("vo", vo.getMid());
		}
		
		String json = gson.toJson(map);
		out.print(json);
		
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
