<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>modifyForm.jsp</title>
</head>
<body>
<%
 BoardVO vo = (BoardVO) request.getAttribute("vo");
%>
                         
	<form action="modifyBoard.do" method="POST">
	<input type = "hidden" name="bno" value ="<%= vo.getBoardNo()%>">
	<table class="table">
	<tr>
	<th>작성일시</th>
	<td><%=vo.getWriteDate() %></td>
	</tr>
	<tr>
	<th>제목</th>
	<td><input type="text" name ="title"  class = "form-control" value="<%=vo.getTitle() %>"></td>
	</tr>
	<tr>
	<th>작성자</th>
	<td><input type="text" name ="writer"  class = "form-control" value="<%=vo.getWriter() %>"></td>
	</tr>
	<tr>
	<td colspan="2"><textarea cols="40" rows="5" name ="content"  class = "form-control"><%=vo.getContent() %></textarea></td>
	</tr>
	<tr>
	<th>파일명</th>
	<%if(vo.getImage()!=null){ %>
	<td><img src="image/<%=vo.getImage() %>" width ="80px">
	<%} %>
	<tr>
	<td colspan="2" align ="center">
	<input type = "submit" value="수정"  class = "btn btn-primary">
	<input type = "button" value="삭제"  class = "btn btn-warning"></td>
	</tr>
	</table>
	</form>
</body>
</html>