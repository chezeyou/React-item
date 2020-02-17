import moment from 'moment';

export default function timeFormat(dateTime) {
    const nowDateTime = moment(moment().format('YYYY-MM-DD HH:mm:ss'));
    const attackDateTime = moment(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));
    const interval = moment.duration(nowDateTime - attackDateTime, 'ms');
    return interval.locale('zh-cn').humanize();
}
