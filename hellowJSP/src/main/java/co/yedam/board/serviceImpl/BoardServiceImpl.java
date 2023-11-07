package co.yedam.board.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.board.mapper.BoardMapper;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;
import co.yedam.common.DataSourceMybatis;

public class BoardServiceImpl implements BoardService {

BoardDAO dao = new BoardDAO();

	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);

	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);//BoardMapper.class는 인스턴스

	@Override
	public List<BoardVO> boardList() {

		return mapper.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNo) {
		dao.updateCnt(boardNo);
		return dao.select(boardNo);
	}

	@Override
	public boolean addBoard(BoardVO vo) {

		return dao.insert(vo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO vo) {

		return dao.update(vo) == 1;
	}

	@Override
	public boolean removeBoard(int boardNo) {

		return dao.delete(boardNo) == 1;
	}

	@Override
	public MemberVO loginCheck(String id, String pw) {

		return dao.getUser(id, pw);
	}

	@Override
	public List<MemberVO> MemberList() {

		return dao.getMember();
	}
}
