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

public class ModifyBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//파라메터 활용 -> 데이터 수정 -> 목록이동.
		BoardVO vo = new BoardVO();
		BoardService svc = new BoardServiceImpl();
		if (req.getMethod().equals("GET"))
		{	
			String title = req.getParameter("title");
			String content = req.getParameter("content");
			String writer = req.getParameter("writer");
			String img = req.getParameter("img");
			
		vo.setTitle(title);
		vo.setContent(content);
		vo.setWriter(writer);
		vo.setImage(img);
		
		}else if(req.getMethod().equals("POST")){
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 5*1024*1024;
		// MultipartRequest mr;
			MultipartRequest mr;
			try {
				mr = new MultipartRequest(req, saveDir, size, "UTF-8", new DefaultFileRenamePolicy());
				String title = mr.getParameter("title");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");
				vo.setTitle(title);
				vo.setImage(img);
				vo.setContent(content);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
		if(svc.editBoard(vo)) {

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

	}//

}
