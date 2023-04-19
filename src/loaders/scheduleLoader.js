import axios from "axios";
import {API_URI} from "../utils/consts.js";

export default async () => {
    const schedule = {
        data: [
            {
                date: '17.04.2023',
                day: 'Понедельник',
                type: 'lectures',
                lectures: {
                    daytime: {
                        first: {
                            lectureId: 1,
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '15:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    },
                    evening: {
                        first: {
                            lectureId: 1,
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '21:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    }
                },
            },
            {
                date: '18.04.2023',
                day: 'Вторник',
                type: 'free',
                lectures: null,
            },
            {
                date: '19.04.2023',
                day: 'Среда',
                type: 'lectures',
                lectures: {
                    daytime: {
                        first: {
                            lectureId: 1,
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '15:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    },
                    evening: {
                        first: {
                            lectureId: 1,
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '21:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    }
                },
            },
            {
                date: '20.04.2023',
                day: 'Четверг',
                type: 'free',
                lectures: null,
            },
            {
                date: '21.04.2023',
                day: 'Пятница',
                type: 'lectures',
                lectures: {
                    daytime: {
                        first: {
                            lectureId: 1,
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '15:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    },
                    evening: {
                        first: {
                            lectureId: 1,
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '21:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    }
                },
            },
            {
                date: '22.04.2023',
                day: 'Суббота',
                type: 'lectures',
                lectures: {
                    daytime: {
                        first: {
                            lectureId: 1,
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '15:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    },
                    evening: {
                        first: {
                            lectureId: 1,
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            lectureId: 2,
                            time: '21:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        }
                    }
                },
            },
            {
                date: '23.04.2023',
                day: 'Воскресенье',
                type: 'exams',
                exams: {
                    teachers: [
                        {
                            id: 1,
                            name: 'Emiel Regis van der Eretein',
                            role: 'Ректор Академии Ночи',
                            from: '16:00',
                        },
                        {
                            id: 1,
                            name: 'Emiel Regis van der Eretein',
                            role: 'Ректор Академии Ночи',
                            from: '16:00',
                        },
                        {
                            id: 1,
                            name: 'Emiel Regis van der Eretein',
                            role: 'Ректор Академии Ночи',
                            from: '16:00',
                        },
                        {
                            id: 1,
                            name: 'Emiel Regis van der Eretein',
                            role: 'Ректор Академии Ночи',
                            from: '16:00',
                        },
                        {
                            id: 1,
                            name: 'Emiel Regis van der Eretein',
                            role: 'Ректор Академии Ночи',
                            from: '16:00',
                        }
                    ],
                },
            },
        ],
    }

    return {schedule: schedule.data};
};