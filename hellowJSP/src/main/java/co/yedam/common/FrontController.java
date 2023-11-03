package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;

public class FrontController extends HttpServlet{
	//init->service
	Map<String, Command> map = new HashMap<>();//Command 인터페이스를 밸류값으로
	@Override
	public void init() throws ServletException {
		
		//map.put("/FirstServlet.do", new FirstControl());//FirstControl:Command 인터페이스 구현하는 클래스
		//map.put("/second.do", new SecondControl());//앞에 주소가 들어오면 뒤에 클래스를 실행하겠다
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
		//등록
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("FrontController");
		String uri = req.getRequestURI();//http://localhost:8080/helloJsp/??.do //helloJsp/??.do 이 값을 가져오는게 uri //??.do 가져오는건 url
		String context = req.getServletContext().getContextPath();//helloJsq
		String page= uri.substring(context.length());
		System.out.println(page);
		
		
		Command controller = map.get(page);
		controller.execute(req, resp);
		
		
	}
}
