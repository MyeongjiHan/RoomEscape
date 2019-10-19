room = game.createRoom("room", "배경-1.png") // 방 생성
room2 = game.createRoom("room2", "배경-6.png") //방2
room3 = game.createRoom("room3", "배경-5.png") //방3

//room1
room.doorToRoom2 = room.createObject("doorToRoom2", "문-오른쪽-닫힘.png") // 문 생성
room.doorToRoom2.setWidth(136) // 크기 조절
room.locateObject(room.doorToRoom2, 1049, 300) // 문 배치
room.doorToRoom2.lock() // door 상태를 locked로 변경

room.doorToRoom2.onClick = function() { // door를 클릭했을 때
    if(room.doorToRoom2.isClosed()){ // door가 closed 상태이면
        room.doorToRoom2.open() // door의 상태를 open으로 바꿈
    } else if (room.doorToRoom2.isOpened()){ // door가 opened 상태이면
        game.move(room2) // room2로 이동
    } else if (room.doorToRoom2.isLocked()){ // door가 locked 상태이면
        printMessage("문이 잠겨있다") // 메시지 출력
    }
}

room.doorToRoom2.onOpen = function() { // door 상태가 open으로 변경되면 실행
    room.doorToRoom2.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
    showKeypad("number", "3712" , function(){ // 키패드 1 - 숫자4자리
        room.doorToRoom2.unlock() // door의 잠금을 연다
        printMessage("잠금장치가 열리는 소리가 들렸다.")
     })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.chair3 = room.createObject("chair3", "의자2-2.png")
room.chair3.setWidth(120)
room.locateObject(room.chair3, 600, 450)

room.table = room.createObject("table", "테이블2-2.png")
room.table.setWidth(350)
room.locateObject(room.table, 500, 500)

room.chair1 = room.createObject("chair1", "의자1-3.png")
room.chair1.setWidth(120)
room.locateObject(room.chair1, 350, 500)

room.chair2 = room.createObject("chair2", "의자1-3.png")
room.chair2.setWidth(120)
room.locateObject(room.chair2, 440, 520)

room.cup1 = room.createObject("cup1", "컵-닫힘.png")
room.cup1.setWidth(30)
room.locateObject(room.cup1, 470, 400)

room.cup2 = room.createObject("cup2", "컵-열림.png")
room.cup2.setWidth(30)
room.locateObject(room.cup2, 510, 400)

room.cookie = room.createObject("cookie", "쿠키.png")
room.cookie.setWidth(70)
room.locateObject(room.cookie, 540, 440)

room.obj = room.createObject("obj", "장식2-좌.png")
room.obj.setWidth(150)
room.locateObject(room.obj, 150, 430)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
    showImageViewer("종이.png", "힌트.txt"); // 이미지 출력
}

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력 

//room2
room2.doorToRoom = room2.createObject("doorToRoom", "문-왼쪽-닫힘.png") // 문 생성
room2.doorToRoom.setWidth(136) // 크기 조절
room2.locateObject(room2.doorToRoom, 315, 315) // 문 배치

room2.doorToRoom.onClick = function() { // door를 클릭했을 때
    if(room2.doorToRoom.isClosed()){ // door가 closed 상태이면
        room2.doorToRoom.open() // door의 상태를 open으로 바꿈
    } else if (room2.doorToRoom.isOpened()){ // door가 opened 상태이면
        game.move(room) // room으로 이동
    } else {}
}
room2.doorToRoom.onOpen = function() { // door 상태가 open으로 변경되면 실행
    room2.doorToRoom.setSprite("문-왼쪽-열림.png") // 열린 문으로 변경
}
room2.doorToRoom.onClose = function() {
    room2.doorToRoom.setSprite("문-왼쪽-닫힘.png")
}

room2.doorToRoom3 = room2.createObject("doorToRoom3", "문-오른쪽-닫힘.png") // 문 생성
room2.doorToRoom3.setWidth(136) // 크기 조절
room2.locateObject(room2.doorToRoom3, 1049, 315) // 문 배치

room2.doorToRoom3.onClick = function() { // door를 클릭했을 때
    if(room2.doorToRoom3.isClosed()){ // door가 closed 상태이면
        room2.doorToRoom3.open() // door의 상태를 open으로 바꿈
    } else if (room2.doorToRoom3.isOpened()){ // door가 opened 상태이면
        game.move(room3) // room2로 이동
    } else if (room2.doorToRoom3.isLocked()){ // door가 locked 상태이면
        printMessage("문이 잠겨있다") // 메시지 출력
    }
}
room2.doorToRoom3.onOpen = function() { // door 상태가 open으로 변경되면 실행
    room2.doorToRoom3.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}
room2.doorToRoom3.onClose = function() {
    room2.doorToRoom3.setSprite("문-오른쪽-닫힘.png")
}

room2.keypad = room2.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 930, 250) // 위치 변경

room2.keypad.onClick = function() {
    showKeypad("number", "1026" , function(){ // 키패드 1 - 숫자4자리
        room2.doorToRoom3.unlock() // 출구의 잠금을 연다
        printMessage("잠금장치가 열렸다.")
     })
}

room2.box = room2.createObject("box", "상자4-1-닫힘.png")
room2.box.setWidth(130)
room2.locateObject(room2.box, 600, 550)
room2.box.onClick = function() { // 클릭했을 때
    if(room2.box.isOpened()) { // Opened 상태인 경우
        room2.box.close() // close
    } else if(room2.box.isClosed()) { //Closed 상태인 경우
        room2.box.open() // open
    } else { 
        // do nothing
    }
}

room2.box.onOpen = function() {
    room2.box.setSprite("상자4-1-열림.png") // 열린 그림으로 변경
    showImageViewer("종이.png", "힌트2.txt"); // 이미지 출력
}
room2.box.onClose = function() {
    room2.box.setSprite("상자4-1-닫힘.png") // 닫힌 그림으로 변경
}

//room3
room3.doorToRoom2 = room3.createObject("doorToRoom2", "문-왼쪽-닫힘.png") // 문 생성
room3.doorToRoom2.setWidth(136) // 크기 조절
room3.locateObject(room3.doorToRoom2, 315,315) // 문 배치

room3.doorToRoom2.onClick = function() { // door를 클릭했을 때
    if(room3.doorToRoom2.isClosed()){ // door가 closed 상태이면
        room3.doorToRoom2.open() // door의 상태를 open으로 바꿈
    } else if (room3.doorToRoom2.isOpened()){ // door가 opened 상태이면
        game.move(room2) // room2으로 이동
    } else {}
}
room3.doorToRoom2.onOpen = function() { // door 상태가 open으로 변경되면 실행
    room3.doorToRoom2.setSprite("문-왼쪽-열림.png") // 열린 문으로 변경
}
room3.doorToRoom2.onClose = function() {
    room3.doorToRoom2.setSprite("문-왼쪽-닫힘.png")
}

//나가는 문 
room3.out = room3.createObject("out", "문2-우-닫힘.png") // 문 생성
room3.out.setWidth(136) // 크기 조절
room3.locateObject(room3.out, 1060, 280) // 문 배치
room3.out.lock() // door 상태를 locked로 변경

room3.out.onClick = function() { // door를 클릭했을 때
    if(room3.out.isClosed()){ // door가 closed 상태이면
        room3.out.open() // door의 상태를 open으로 바꿈
    } else if (room3.out.isOpened()){ // door가 opened 상태이면
        game.clear() // 탈출 
    } else if (room3.out.isLocked()){ // door가 locked 상태일때
        printMessage("역시나 문이 잠겨있다.")
        }
}
room3.out.onOpen = function() { // door 상태가 open으로 변경되면 실행
    room3.out.setSprite("문2-우-열림.png") // 열린 문으로 변경
}

room3.keypad = room3.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room3.keypad.setWidth(50) // 크기 조절
room3.locateObject(room3.keypad, 930, 250) // 위치 변경

room3.keypad.onClick = function() {
    showKeypad("number", "1988" , function(){ // 키패드 1 - 숫자4자리
        room3.out.unlock() // 출구의 잠금을 연다
        printMessage("잠금장치가 열렸다.")
     })
}

room3.box = room3.createObject("box", "상자4-1-닫힘.png")
room3.box.setWidth(130)
room3.locateObject(room3.box, 600, 550)
room3.box.onClick = function() { // 클릭했을 때
    if(room3.box.isOpened()) { // Opened 상태인 경우
        room3.box.close() // close
    } else if(room3.box.isClosed()) { //Closed 상태인 경우
        room3.box.open() // open
    } else { 
        // do nothing
    }
}

room3.box.onOpen = function() {
    room3.box.setSprite("상자4-1-열림.png") // 열린 그림으로 변경
    showImageViewer("종이.png", "힌트3.txt"); // 이미지 출력
}
room3.box.onClose = function() {
    room3.box.setSprite("상자4-1-닫힘.png") // 닫힌 그림으로 변경
}