# 개인용 헌법 Ailey GPT 빌더 패키지

이 폴더는 다른 제작자의 GPT를 수정할 수 없는 사용자가 자신의 Plus 계정에서 개인용 헌법 GPT를 새로 만드는 데 필요한 설정을 모아 둔다.

## 가장 먼저 할 일

1. ChatGPT 웹의 GPT 만들기 화면에서 구성 탭을 연다.
2. `01_BUILDER_INSTRUCTIONS.txt`의 내용을 지침 칸에 전부 붙여 넣는다.
3. `02_CONVERSATION_STARTERS.txt`의 네 문장을 대화 스타터에 각각 넣는다.
4. 아래 지식 파일을 업로드한다.
5. 기능을 권장값으로 설정하고 미리 보기에서 `04_VALIDATION_CHECKLIST.md` 순서로 시험한다.
6. 정상 작동을 확인한 뒤 공개 범위를 `나만 사용`으로 만들어 저장한다.

## 지식 파일 업로드 순서

### 필수

1. `prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt`
2. `gpt_builder_package/knowledge/02_save_load_dual_layer_v2.md`
3. `gpt_builder_package/knowledge/03_constitution_project_instructions.md`
4. `gpt_builder_package/knowledge/04_chat_partition_plan.md`
5. `gpt_builder_package/knowledge/05_restore_validation_protocol.md`
6. 사용자가 보유한 김건호 헌법 비헌기OX 교재 PDF 또는 목차·판례 색인

### 선택

7. `gpt_builder_package/knowledge/06_integrated_operating_manual.md`
8. `gpt_builder_package/knowledge/07_quick_checkpoint_example.json`

## 업로드하면 안 되는 파일

- 구형 `cc_canvas.md`
- 구형 `01_canvas_runtime_v2.md`
- 동일한 캔버스 명령을 정의하는 다른 프롬프트
- 전체 백업 JSON을 상시 지식 파일로 업로드한 것

구형 캔버스 규칙과 새 `M_C_canvas_engine.prompt.txt`를 함께 올리면 `.cc`, `.cu`, `.cv`, `.cs`의 우선순위와 출력 규칙이 충돌할 수 있다.

## 기능 권장값

- 웹 검색: 켜기
- 이미지 생성: 끄기
- 코드 인터프리터 및 데이터 분석: 켜기
- 네이티브 Canvas: 항목이 보이면 켜기, 보이지 않아도 사용자 정의 `.cc` 런타임에는 영향 없음
- 앱 또는 Actions: 처음에는 추가하지 않기

## 권장 모델

속도를 우선하면 드롭다운에서 가장 빠른 일반 모델을 선택한다. 현재 화면에 `Thinking 5.6`만 안정적으로 표시된다면 그대로 사용해도 된다. 복수 판례 비교나 헌법소원 적법요건 종합에만 높은 사고 수준을 사용하고, 일반 OX·채점은 짧은 답변을 요구한다.

## GPT와 프로젝트의 역할 분리

- 개인용 GPT: 말투, 학습 규칙, 저장·복원 규칙, 캔버스 명령
- 헌법 프로젝트: 교재, 최신 체크포인트, 단원별 채팅, 장기 문맥
- Ailey’s Note: 상세 아카이브, 캔버스 스냅샷, 전체 백업 JSON

새 GPT를 만들었다고 전체 과거 기록을 GPT 지식에 모두 넣지 않는다. 새 채팅에서는 최신 빠른 체크포인트만 복원한다.
