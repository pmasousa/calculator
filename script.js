const buttons = [...document.querySelectorAll('.btn')];
let operation = document.querySelector('.operation');
let result = document.querySelector('.result');

let current_operation = '';
let has_operation = false;
let has_dot = false;
let can_put_dot = false;
let operation_done = false;
let is_infinity = false;

function addButtonEventListeners(buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonId = button.id;
        switch (buttonId) {
            case 'AC':
                operation.textContent = '0';
                result.textContent = '';
                current_operation = '';
                has_operation = false;
                has_dot = false;
                operation_done = false;
                is_infinity = false;
                break;
            case 'DEL':
                if (is_infinity){
                    break;
                }
                let new_op
                if (operation_done){
                    operation_done = false;
                    current_operation = ''
                    operation.textContent = '0';
                    break;
                }
                if (current_operation.length === 0){
                    break;
                }
                if (current_operation[current_operation.length - 1] === ' '){
                    new_op = current_operation.split('').slice(0, -2).join('');
                    has_operation = false;
                }
                else{
                    new_op = current_operation.split('').slice(0, -1).join('');
                    if (!new_op.includes('.')) {
                        has_dot = false;
                    }
                }
                current_operation = new_op;
                operation.innerHTML = new_op;
                can_put_dot = true;
                break;
            case '0':
                numbers('0');
                break;
            case '1':
                numbers('1');
                break;
            case '2':
                numbers('2');
                break;
            case '3':
                numbers('3');
                break;
            case '4':
                numbers('4');
                break;
            case '5':
                numbers('5');
                break;
            case '6':
                numbers('6');
                break;
            case '7':
                numbers('7');
                break;
            case '8':
                numbers('8');
                break;
            case '9':
                numbers('9');
                break;
            case '+':
                operations('+');
                break;
            case '-':
                operations('-');
                break;
            case '*':
                operations('×');
                break;
            case '/':
                operations('÷');
                break;
            case '^':
                operations('^');
                break;

            case 'dot':
                if (operation_done){
                    break;
                }
                if (can_put_dot && !has_dot){
                    current_operation += '.';
                    operation.innerHTML = current_operation;
                    has_dot = true;
                }
                break;
            case '=':
                if (operation_done){
                    break;
                }

                if (has_operation && can_put_dot){
                    let num1 = current_operation.split(/ [\^+×÷-] /)[0];
                    let num2 = current_operation.split(/ [\^+×÷-] /)[1];
                    let op = current_operation.match(/[\^+×÷-]/)[0];
                    let res = 0;

                    switch (op) {
                        case '+':
                            res = parseFloat(num1) + parseFloat(num2);
                            break;
                        case '-':
                            res = parseFloat(num1) - parseFloat(num2);
                            break;
                        case '×':
                            res = parseFloat(num1) * parseFloat(num2);
                            break;
                        case '÷':
                            res = parseFloat(num1) / parseFloat(num2);
                            break;
                        case '^':
                            res = Math.pow(parseFloat(num1), parseFloat(num2));
                        default:
                            break;
                    }
                    if (res > 9999999999999 || res < -9999999999999){
                        res = 'infinity';
                        is_infinity = true;
                    }
                    else if (res.toString().includes('.')){
                        res = parseFloat(res.toFixed(Math.min(10,res.toString().length)));
                    }
                    result.textContent = res;
                    operation_done = true;
                    has_operation = false;
                }
                break;
          default:
                break;
        }
      });
    });
}

function numbers(n) {
    if (operation_done){
        return;
    }
    current_operation += n;
    if (current_operation.length >= 20){
        operation.textContent = 'Number too long';
        operation_done = true;
        return;
    }    
    operation.textContent = current_operation;
    can_put_dot = true;
}

function operations(op) {
    if (is_infinity){
        return;
    }
    if (operation_done && !is_infinity){
        operation_done = false;
        current_operation = result.textContent.toString();
    }
    if (!has_operation && current_operation.length > 0){
        current_operation += ' ' + op + ' ';
        has_operation = true;
        operation.textContent = current_operation;
        can_put_dot = false;
    }
}

addButtonEventListeners(buttons);