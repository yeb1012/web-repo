package co.yedam.common;

import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;

public class MainExam {

	public static void main(String[] args) {
	//학생 아이디, 비밀번호, 이름, 학과, 생일
		BoardDAO bd = new BoardDAO();
		BoardVO vo = new BoardVO();
		vo=bd.select(1);
	System.out.println(bd.update(vo));
	System.out.println(bd.delete(1));
	


}
}//
