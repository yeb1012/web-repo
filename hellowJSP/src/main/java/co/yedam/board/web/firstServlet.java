package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class firstServlet
 */
//@WebServlet("/FirstServlet.do")
public class firstServlet extends HttpServlet {
	//init->service->destroy
	
	private static final long serialVersionUID = 1L;
       
   
    public firstServlet() {
        super();
        
    }
@Override//service가 없으면 두겟이나 두포스트 실행, 서비스가 있으면 서비스를 실행
protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
	System.out.println("서비스 실행");
	doGet(req,resp);//두겟도 실행시켜 주겠다하면 service안에 두겟 메소드 넣어줘야함
}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.setContentType("text/html;charset=utf-8");
		String name = "홍길동";
		int age = 20;
		for(int i =1; i<=5; i++) {
			response.getWriter().print("<p>"+i+"번째 이름은" +name+"이고, 나이는"+age+"세 입니다</p>");
		
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
