package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.AdminFormControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;

public class FrontController extends HttpServlet{
	//init->service
	Map<String, Command> map = new HashMap<>();//Command 인터페이스를 밸류값으로
	@Override
	public void init() throws ServletException {
		//메인 페이지
		map.put("/main.do", new MainControl());
	
		
		//로그인 페이지
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		
		//로그아웃 페이지
		map.put("/logoutForm.do", new LogoutFormControl());
		//map.put("logout.do", new LogoutControl());
		
		//관리자 페이지
		map.put("/MemberList.do", new AdminFormControl());		
		//map.put("/FirstServlet.do", new FirstControl());//FirstControl:Command 인터페이스 구현하는 클래스
		//map.put("/second.do", new SecondControl());//앞에 주소가 들어오면 뒤에 클래스를 실행하겠다
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
		//등록
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		//수정화면
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		
		//삭제화면
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		//요청정보의 한글 인코딩 방식
		req.setCharacterEncoding("UTF-8");
		
		String uri = req.getRequestURI();//http://localhost:8080/helloJsp/??.do //helloJsp/??.do 이 값을 가져오는게 uri //??.do 가져오는건 url
		String context = req.getServletContext().getContextPath();//helloJsq
		String page= uri.substring(context.length());
		System.out.println(page);
		
		
		Command controller = map.get(page);
		controller.execute(req, resp);
		
		
	}
}
