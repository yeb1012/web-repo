package org.yedam.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;

public class BookServiceImpl implements BookService {
	private DataSource dao = DataSource.getInstance();
	private Connection conn;
	private PreparedStatement psmt;
	private void close() {
		try {
			if (psmt != null)
				psmt.close();// 2번닫고
			if (conn != null)
				conn.close();// 1번닫고

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	@Override
	public List<BookVO> bookList() {
		List<BookVO> book = new ArrayList<BookVO>();
		String sql = "SELECT*FROM BOOK";
		BookVO vo;
		try {
			conn = dao.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while (rs.next()) {
				vo = new BookVO();
				vo.setBookCode(rs.getString("book_code"));
				vo.setBookTitle(rs.getString("book_title"));
				vo.setBookAuthor(rs.getString("book_author"));
				vo.setBookPress(rs.getString("book_press"));
				vo.setBookPrice(rs.getString("book_price"));
				book.add(vo);
			}

			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return book;
	}// bookList
}// class
