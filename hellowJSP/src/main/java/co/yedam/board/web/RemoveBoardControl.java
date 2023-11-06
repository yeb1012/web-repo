package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class RemoveBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String bno = req.getParameter("bno");
		
		BoardService svc = new BoardServiceImpl();
		if(svc.removeBoard(Integer.parseInt(bno))) {

		try
		{
			resp.sendRedirect("boardList.do");
		}catch(IOException e){
			e.printStackTrace();
		}
		}else{
			try{resp.sendRedirect("modifyForm.do");}
			catch(IOException e)
		{	e.printStackTrace();}
		}
	}

}
