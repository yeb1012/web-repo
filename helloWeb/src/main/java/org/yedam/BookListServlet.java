package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookService;
import org.yedam.service.BookServiceImpl;
import org.yedam.service.BookVO;

/**
 * Servlet implementation class BookServ
 */
@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookService bs = new BookServiceImpl();
		List<BookVO> list = bs.bookList();
		
		response.setContentType("text/jason;charset=utf-8");
		PrintWriter out = response.getWriter();
		int cnt = 0;
		String str = "[";
		for(BookVO vo : list) {
			str +="{";
			str +="\"bookcode\":\""+vo.getBookCode()+"\",";
			str +="\"booktitle\":\""+vo.getBookTitle()+"\",";
			str +="\"bookauthor\":\""+vo.getBookAuthor()+"\",";
			str +="\"bookpress\":\""+vo.getBookPress()+"\",";
			str +="\"bookprice\":\""+vo.getBookPrice()+"\"";
			str +="}";
			if(++cnt != list.size())
			{str +=",";}
		}
			str+="]";
			out.print(str);
	}//doGet

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
