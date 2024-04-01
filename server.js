
function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        ageYears--;
    }

    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    if (ageMonths < 0) {
        ageMonths += 12;
    }
    let ageDays = currentDate.getDate() - birthDate.getDate();
    if (ageDays < 0) {
        const prevMonthLastDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        ageDays += prevMonthLastDay;
        ageMonths--;
    }

    return {
        years: ageYears,
        months: ageMonths,
        days: ageDays
    };
}

module.exports = calculateAge;

