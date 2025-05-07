class Calualtor {
  $previousPreviewPrompt = "";
  $currentPreviewPrompt = "";
  previousOperation = "";
  currentOpenration = "";

  constructor($previousPreview, $currentPreview) {
    this.$previousPreviewPrompt = $previousPreview;
    this.$currentPreviewPrompt = $currentPreview;
  }

  onPressNumber(number) {
    this.$currentPreviewPrompt.textContent += number;
  }

  onPressOperation(operation) {
    this.$previousPreviewPrompt.textContent =
      this.$currentPreviewPrompt.textContent + " " + operation;
    this.$currentPreviewPrompt.textContent = "";

    this.previousOperation = operation;
  }

  handlePlus() {
    return (
      +this.$previousPreviewPrompt.textContent.split(" ")[0] +
      +this.$currentPreviewPrompt.textContent
    );
  }
  handleMinus() {
    return (
      +this.$previousPreviewPrompt.textContent.split(" ")[0] -
      +this.$currentPreviewPrompt.textContent
    );
  }
  handleMultiply() {
    return (
      +this.$previousPreviewPrompt.textContent.split(" ")[0] *
      +this.$currentPreviewPrompt.textContent
    );
  }
  handleDivide() {
    return (
      +this.$previousPreviewPrompt.textContent.split(" ")[0] /
      +this.$currentPreviewPrompt.textContent
    );
  }

  onEqaul() {
    let result = 0;

    if (this.previousOperation == "+") {
      result = this.handlePlus();
    } else if (this.previousOperation == "-") {
      result = this.handleMinus();
    } else if (this.previousOperation == "*") {
      result = this.handleMultiply();
    } else if (this.previousOperation == "÷") {
      result = this.handleDivide();
    }

    this.$previousPreviewPrompt.textContent = "";
    this.$currentPreviewPrompt.textContent = result.toString();
    this.currentOpenration = "";
  }
}

// 객체 생성

// 연산자
const $plus = document.querySelector("[data-btn-plus]");
const $minus = document.querySelector("[data-btn-minus]");
const $multiply = document.querySelector("[data-btn-multiply]");
const $divide = document.querySelector("[data-btn-divide]");
const $eqaul = document.querySelector("[data-btn-eqaul]");

// AC, DEL
const $reset = document.querySelector("[data-btn-reset]");
const $delete = document.querySelector("[data-btn-delete]");

// 숫자, 연산자
const $numbers = document.querySelectorAll("[data-btn-number]");
const $operations = document.querySelectorAll("[data-btn-operation]");

// 프롬프트
const $previousPreview = document.querySelector("[data-previous-preview]");
const $currentPreview = document.querySelector("[data-current-preview]");

// 숫자선택
$numbers.forEach(($number) => {
  $number.addEventListener("click", (e) => {
    calc.onPressNumber(e.target.textContent);
  });
});

// 연산자선택
$operations.forEach(($operation) => {
  $operation.addEventListener("click", (e) => {
    if (e.target.textContent.trim() === "=") {
      calc.onEqaul();
    } else {
      calc.onPressOperation($operation.textContent.trim());
    }
  });
});

const calc = new Calualtor($previousPreview, $currentPreview);
