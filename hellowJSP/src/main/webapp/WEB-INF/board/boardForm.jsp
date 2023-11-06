<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>


	<h3>게시글 등록화면</h3>                              
	<form action="addBoard.do" method="POST" class = "multipart/from-data">
	<table class="table">
	<tr>
	<th>제목</th>
	<td><input type="text" name ="title" class = "form-control"></td>
	</tr>
	<tr>
	<th>작성자</th>
	<td><input type="text" readonly name ="writer" class = "form-control" value="<%=logId%>"></td>
	</tr>
	<tr>
	<td colspan="2"><textarea cols="40" rows="5" name ="content" class = "form-control"></textarea></td>
	</tr>
	<tr>
	<th>파일명</th>
	<td><input type ="file" name = "img">
	<tr>
	<td colspan="2" align="center">
	<input type = "submit"  class = "btn btn-primary" value="저장">
	<input type = "reset" value="초기화" class = "btn btn-warning" ></td>
	</tr>
	</table>
	</form>
<%@include file="../layout/footer.jsp"%>