<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
 <%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<form action="modifyBoard.do" name="myFrm" >
	<table class="table">
		<tr>
			<th>글번호</th>
			<td><%=vo.getBoardNo()%></td>
			<th>작성일지</th>
			<td><%=vo.getWriteDate()%></td>

		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<td colspan="4"><textarea>
					<%=vo.getContent()%>
				</textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<td colspan="3">
			<%if(vo.getImage()!=null){ %>
			<img width="80px" src="<%=vo.getImage()%>">
			<%}%>
			</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<tr>
			<td colspan="2" align="center">
			<%if(logId != null && logId.equals(vo.getWriter())){ %>
			
			<input type="submit" value="수정">
			<input type="button" value="삭제">
				
			<%}else{ %>
			<input disabled type="submit" value="수정">
			<input disabled type="button" value="삭제">
			<%} %>	
				</td>
		</tr>
	</table>
	</form>
	
	<script>
	document.querySelector('input[type=button]').addEventListenter('click', function (e){
		document.forms.myFrm.action = 'remeveForm.do'
		document.forms.myFrm.submit();;
	});
	</script>
<%@include file="../layout/footer.jsp"%>