# iPad Safari에서 설정하는 순서

## 1. 구성 탭 유지

현재 화면처럼 `만들기 | 구성` 중 `구성`을 선택한다. iPad에서 화면이 좁으면 Safari의 데스크톱 웹사이트 요청 또는 가로 화면을 사용한다.

## 2. 위쪽으로 이동해 기본 정보 입력

화면을 위로 스크롤해 다음 세 항목을 찾는다.

- 이름
- 설명
- 지침

입력값은 `05_BUILDER_FIELD_MAP.md`를 그대로 사용한다.

지침 칸은 길기 때문에 `01_BUILDER_INSTRUCTIONS.txt`를 새 탭에서 열고 전체 선택 → 복사 → 지침 칸 붙여 넣기를 사용한다.

## 3. 대화 스타터

대화 스타터 입력칸에 `02_CONVERSATION_STARTERS.txt`의 네 문단을 한 문단씩 추가한다.

## 4. 지식 파일 저장 준비

GitHub에서 각 파일을 연 뒤 우측 상단의 다운로드 또는 Raw 버튼을 눌러 iPad의 파일 앱에 저장한다.

가장 중요한 캔버스 파일 경로:

`prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt`

패키지 지식 파일 경로:

`gpt_builder_package/knowledge/`

교재 PDF는 사용자가 보관 중인 원본을 사용한다.

## 5. 지식 업로드

현재 화면의 `파일 업로드`를 누른다.

파일 앱에서 다음을 선택한다.

1. M_C_canvas_engine.prompt.txt
2. 02_save_load_dual_layer_v2.md
3. 03_constitution_project_instructions.md
4. 04_chat_partition_plan.md
5. 05_restore_validation_protocol.md
6. 교재 PDF 또는 목차·판례 색인

업로드가 끝날 때까지 다른 화면으로 이동하지 않는다. 파일 이름이 지식 목록에 모두 나타나는지 확인한다.

## 6. 권장 모델

화면의 `권장 모델` 드롭다운을 누른다.

- 빠른 모델이 보이면 일반 학습 속도를 위해 선택할 수 있다.
- 현재처럼 Thinking 5.6이 선택되어 있으면 그대로 진행해도 된다.

## 7. 기능

현재 화면 기준:

- 웹 검색: 체크 유지
- 이미지 생성: 체크 해제
- 코드 인터프리터 및 데이터 분석: 체크 유지

아래쪽에 Canvas 항목이 따로 보이면 체크한다. 보이지 않아도 사용자 정의 `.cc` HTML 런타임은 작동할 수 있다.

## 8. 오른쪽 미리 보기 시험

먼저 다음 문장을 입력한다.

“POINT와 페이지를 주지 않았어. 현재 범위를 추정하지 말고 무엇이 필요한지만 말해.”

정상이라면 임의 범위를 만들지 않는다.

다음으로 `knowledge/07_quick_checkpoint_example.json`을 붙여 넣고 복원 시험을 한다. 이후 `04_VALIDATION_CHECKLIST.md`의 C∼G를 차례로 실행한다.

## 9. 만들기

미리 보기 시험이 통과하면 오른쪽 위 또는 화면 하단의 만들기 버튼을 누른다.

공개 범위는 `나만 사용`을 선택한다.

## 10. 만든 뒤 첫 실제 사용

1. 헌법 프로젝트를 새로 만든다.
2. 프로젝트 지침에 `knowledge/03_constitution_project_instructions.md`를 붙여 넣는다.
3. 교재, 분할표, 최신 빠른 체크포인트를 프로젝트에 둔다.
4. 프로젝트 안에서 일반 새 채팅을 연다.
5. 개인용 헌법 GPT를 호출한다.
6. 첫 메시지로 빠른 체크포인트를 복원만 한다.
