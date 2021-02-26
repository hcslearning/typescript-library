import numeral from 'numeral'

export function multiplicar(uno:number, dos:number):number{return uno * dos}
export function dividir(uno:number, dos:number):number{return uno/dos}
export function numberFormat(numero:number, formato:string = '$0,0'):string{
    if( numeral.locales['es-cl'] == null) {
            numeral.locales['es-cl'] = {
                delimiters: {
                    thousands: '.',
                    decimal: ','
                },
                abbreviations: {
                    thousand: 'k',
                    million: 'm',
                    billion: 'b',
                    trillion: 't'
                },
                ordinal: function(numero) {
                    return numero === 1 ? 'er' : 'eme'
                },
                currency: {
                    symbol: '$'
                }
            }
        }
        numeral.locale('es-CL')
        return numeral(numero).format( formato )
}
