# GPT 지식 파일 업로드 명세

## 필수 업로드 6개

| 순서 | 파일 | 역할 |
|---|---|---|
| 1 | `prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt` | `.cc`, `.cu`, `.cv`, `.cs`, `.cc reset`, `.ccc` 실행 규격 |
| 2 | `gpt_builder_package/knowledge/02_save_load_dual_layer_v2.md` | 빠른 체크포인트·단원 아카이브·전체 백업 분리 |
| 3 | `gpt_builder_package/knowledge/03_constitution_project_instructions.md` | 헌법 장기학습 자료 우선순위와 세션 운영 |
| 4 | `gpt_builder_package/knowledge/04_chat_partition_plan.md` | 교재 목차 기준 34개 채팅 분할 |
| 5 | `gpt_builder_package/knowledge/05_restore_validation_protocol.md` | 화면 복원과 모델 상태 복원 검증 |
| 6 | 사용자가 보유한 교재 PDF 또는 목차·판례 색인 | 실제 헌법 학습 근거 |

## 선택 업로드 2개

| 순서 | 파일 | 역할 |
|---|---|---|
| 7 | `gpt_builder_package/knowledge/06_integrated_operating_manual.md` | 전체 운영 참고서 |
| 8 | `gpt_builder_package/knowledge/07_quick_checkpoint_example.json` | 체크포인트 형식 예시 |

## 업로드 금지·제외

- 구형 `cc_canvas.md`
- 구형 `01_canvas_runtime_v2.md`
- 원제작자 구버전 `M_C_canvas_engine.prompt.txt`
- 서로 다른 버전의 저장 모듈을 동시에 업로드한 구성
- 전체 백업 JSON을 상시 지식 파일로 고정한 구성

## 중요한 구분

- Builder의 지침 칸: GPT가 항상 지켜야 할 역할·우선순위·워크플로
- 지식 파일: 교재, 상세 규격, 분할표, 검증 절차처럼 참조할 자료
- 프로젝트 지침: 헌법 프로젝트 안에서만 적용될 장기 운영 규칙
- 빠른 체크포인트: 매 새 채팅에서 현재 상태를 복원하는 최신 책갈피

## 파일 교체 원칙

캔버스 엔진이나 저장 모듈이 갱신되면 기존 파일을 남겨 둔 채 새 파일을 추가하지 않는다. 기존 버전을 삭제하고 최신 버전 하나만 업로드한다. 파일명에 버전이 없어도 내용 첫 줄과 GitHub main의 최신 SHA를 확인한다.
