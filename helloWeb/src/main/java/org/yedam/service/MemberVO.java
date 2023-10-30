package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//이걸로 만들면 게터 세터 해쉬코드 이퀄스 등등 다 만들어줘서 편함
//@Setter
//@Getter
//@ToString
@Data  
@AllArgsConstructor
@NoArgsConstructor


public class MemberVO {
	private String mid;
	private String mpassword;
	private String name;
	private String phone;
	
		
	
}
