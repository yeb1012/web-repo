package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String id = req.getParameter("m_id");
		String pw = req.getParameter("m_password");
		
		BoardService svc = new BoardServiceImpl();
		MemberVO vo = new MemberVO();
		vo = svc.loginCheck(id, pw);
		if(svc.loginCheck(id, pw)!= null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", id);//창을 닫지 않는 한 계속 유지 //req는 매번 달라짐
			session.setAttribute("responsbility", vo.getResponsbility());
			
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		}else {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		}
			
			
		
	

}

	}


