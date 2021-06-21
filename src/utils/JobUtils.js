module.exports = {
    remainingDays(job) {
        //cálculo do tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
        const createdDate = new Date(job.createdAt)
        const dueDay = createdDate.getDate() + Number(remainingDays) //dia da entrega do trabalho
        const dueDateInMs = createdDate.setDate(dueDay) // data de vencimento

        const timeDiffInMs = dueDateInMs - Date.now()//diferença do tempo em milisegundos
        // transformar milisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24  // mili * seg * min * hora = dia
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs) // arredonda o número para baixo

        // restam X dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]

}