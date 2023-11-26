export function converter(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;

    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundosRestantes = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;

    var tiempoFormateado = minutos + ':' + segundosRestantes;

    return tiempoFormateado;
}