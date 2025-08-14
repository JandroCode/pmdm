export const calculadoraPesoIdeal = (altura:number, imcObjetivo: number = 22) : number => {
    return +(imcObjetivo * Math.pow(altura,2)).toFixed(2)
}