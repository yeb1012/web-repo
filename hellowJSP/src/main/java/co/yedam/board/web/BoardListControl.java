package co.yedam.board.web;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		BoardService svc = new BoardServiceImpl();
		
		List<BoardVO> list = svc.boardList();
		
		req.setAttribute("list", list);//이 요청 특성이 아래 board/boardList.jsp에 그대로 전달 됨
		
		
		//페이지 요청(BoardList.do)-> 요청 재지정(board/boardList.jsp)
		RequestDispatcher rd =req.getRequestDispatcher("WEB-INF/board/boardList.jsp");//서블릿에서 다른페이지로 이동할 정보를 넣어주고 포워드 요청
		try {
			rd.forward(req, resp);
		}  catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
}
