// TODO implement with recursion
// La recursividad son funciones (consideradas simples, muy legibles y elegantes) que se expresan con su misma definición; funciones que se llaman a sí mismas. Un ejemplo muy ilustrativo es la función de Factorial: N! = N (N-1)! donde ponemos como caso base que 0! = 1 (de no hacerlo así lo llevaríamos al infinito). La recursividad tiene mucho potencial pero, además de la necesidad de encontrar el caso base para hacerlas finitas, tiene otros problemas:
// 1 - Mala optimización y más costosas que un bucle, creando incluso un desbordamiento de pila.
// 2 - Repetición de cálculos ya que, siguiendo el ejemplo, (N-1)! = (N-1) (N-2)!, etc.
// Hay métodos para conseguir subsanarlos como la técnica de memorización.

function positionCircle(i) {
    if(i > 0) {
        dot.down()
        dot.right()
        positionCircle(i-1)
    }
}

positionCircle(26)