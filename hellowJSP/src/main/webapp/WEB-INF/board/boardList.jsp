<%@page import="java.util.List"%>
<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판 목록.(board/boardList.jsp)</title>
</head>
<body>
	<h3>게시판 목록</h3>
	<%
	//Object obj 
	List<BoardVO> list = (List<BoardVO>) request.getAttribute("list");//List<BoardVO> list;
	%>
	<table border="1">
		<thead>
			<tr>
				<th>글번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성날짜</th>
			</tr>
		</thead>
		<tbody>
			<%
			for (BoardVO vo : list) {
			%>
			<tr>
				<td><%=vo.getBoardNo()%></td>
				
				<td><a href ="getBoard.do?bno=<%=vo.getBoardNo()%>"><%=vo.getTitle()%></a></td>
				<td><%=vo.getWriter()%></td>
				<td><%=vo.getWriteDate()%></td>
			</tr>
			<%
			}
			%>
		</tbody>
	</table>
	<p><a href ="boardForm.do">등록화면</a></p>
</body>
</html>