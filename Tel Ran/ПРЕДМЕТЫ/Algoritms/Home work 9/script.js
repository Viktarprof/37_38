// Задача: максимальная выгода, второстепенно заполняемость
// зал для конференций работает с 9:00 до 17:00
// заявки с 9:00 до 13:00 стоят 1 единицу
// заявки с 13:00 до 17:00 стоят 2 единицы

// заявки на пересечении в большую сторону 9:00 стоят 1 ед (заявки, которые занимают больше времени с 9 до 13)
// например с 11 до 14 стоит 1 ед
// заявки на пересечении в большую сторону 17:00 стоят 2 ед (заявки, которые занимают больше времени с 13 до 17)
// например с 12 до 16 стоит 2 ед


// заявки на середине стоят 2 ед (заявки, которые занимают одинаковое количество  времени в обоих интервалах)
// например с 12 до 14 стоит 2 ед


// Достаточно придумать описание алгоритма, можно использовать псевдокод.


// Структура данных для хранения заявок
class Reservation {
    constructor(start, end) {
    this.start = start; // Время начала заявки в минутах с 9:00
    this.end = end; // Время конца заявки в минутах с 9:00
    }
    
    // Метод для расчёта стоимости заявки
    getCost() {
    const cost1 = (this.end <= 13 * 60 ? this.end - this.start : Math.min(this.end, 13 * 60) - this.start) / 60; // Стоимость часов до 13:00
    const cost2 = (this.start >= 13 * 60 ? this.end - this.start : Math.max(this.start, 13 * 60) - this.start) / 60; // Стоимость часов после 13:00
    const costOverlap = (this.start < 13 * 60 && this.end > 13 * 60 ? Math.min(this.end, 17 * 60) - Math.max(this.start, 13 * 60) : 0) / 60; // Стоимость часов, которые занимаются в обоих интервалах
    return cost1 + cost2 + costOverlap;
    }
    }
    
    // Алгоритм для расчёта максимальной выгоды
    function calculateMaxRevenue(reservations) {
    // Сортировка заявок по возрастанию времени начала
    reservations.sort((a, b) => a.start - b.start);
    
    let maxRevenue = 0;
    let currentRevenue = 0;
    let currentEndTime = 9 * 60;
    
    // Проход по всем заявкам
    for (let i = 0; i < reservations.length; i++) {
    const reservation = reservations[i];
    const cost = reservation.getCost();





    // Если заявка заканчивается после окончания работы зала, то её можно пропустить
if (reservation.end > 17 * 60) {
    continue;
  }
  
  // Если заявка начинается позже, чем текущее свободное время, то нужно учитывать простой зала
  if (reservation.start > currentEndTime) {
    maxRevenue += currentRevenue;
    currentRevenue = 0;
    currentEndTime = reservation.start;
  }
  
  currentRevenue += cost;
  
  // Если заявка закончилась позже, чем текущее свободное время, то нужно увеличить свободное время до конца заявки
  if (reservation.end > currentEndTime) {
    currentEndTime = reservation.end;
  }
}

maxRevenue += currentRevenue;
return maxRevenue;
}

// Пример использования
const reservations = [
new Reservation(10 * 60, 12 * 60), // 2 ед
new Reservation(11 * 60, 14 * 60), // 1 ед
new Reservation(14 * 60, 16 * 60), // 2 ед
new Reservation(15 * 60, 16 * 60), // 1 ед
new Reservation(13 * 60, 16 * 60), // 2 ед
]  