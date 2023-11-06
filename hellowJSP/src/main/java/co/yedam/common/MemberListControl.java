package co.yedam.common;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardDAO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MemberListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
			BoardService svc = new BoardServiceImpl();
			BoardDAO bd = new BoardDAO();
			List<MemberVO> list = svc.MemberList();
			
			req.setAttribute("memberlist", list);
			
			RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/main/MemberList.jsp");
			try {
				rd.forward(req, resp);
			}catch(Exception e) {
				e.printStackTrace();		}
		}


	

}
