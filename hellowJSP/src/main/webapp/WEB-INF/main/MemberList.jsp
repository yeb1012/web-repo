<%@page import="java.util.List"%>
<%@page import="co.yedam.board.service.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>


<h3>회원 목록</h3>

<%
//Object obj 
List<MemberVO> list = (List<MemberVO>) request.getAttribute("memberlist");//List<BoardVO> list;
%>

<table class="table">
	<thead>
		<tr>
			<th>멤버아이디</th>
			<th>멤버비밀번호</th>
			<th>멤버이름</th>
			<th>연락처</th>
		</tr>
	</thead>
	<tbody>
		<%
		for (MemberVO vo : list) {
		%>
		<tr>
			<td><%=vo.getMid()%></td>
			<td><%=vo.getMpassword() %></td>
			<td><%=vo.getName()%></td>
			<td><%=vo.getPhone()%></td>
			<td><%=vo.getResponsbility()%></td>
		</tr>
		<%
		}
		%>
	</tbody>
</table>










<%@include file="../layout/footer.jsp"%>