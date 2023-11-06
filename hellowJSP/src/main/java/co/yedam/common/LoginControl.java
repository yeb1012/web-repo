package co.yedam.common;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
		String res = req.getParameter("responsbility");

		
		
		BoardService svc = new BoardServiceImpl();
		List<MemberVO> vo = new ArrayList <MemberVO>();
		vo = svc.MemberList();
		if(svc.loginCheck(id, pw)) {
			

			HttpSession session = req.getSession();
			session.setAttribute("logId", id);//창을 닫지 않는 한 계속 유지 //req는 매번 달라짐
			session.setAttribute("responsbility", svc);
			
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


