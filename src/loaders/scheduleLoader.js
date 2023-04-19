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
                            id: 1,
                            name: 'Наследие Первородных',
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 2,
                            name: 'Иерархия вампирского сообщества',
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
                            id: 1,
                            name: 'Наследие Первородных',
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 2,
                            name: 'Иерархия вампирского сообщества',
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
                            id: 3,
                            name: 'Элизиум',
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 4,
                            name: 'Титульная система',
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
                            id: 3,
                            name: 'Элизиум',
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 4,
                            name: 'Титульная система',
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
                            id: 5,
                            name: 'Кровавые договоры',
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 5,
                            name: 'Кровавые договоры',
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
                            id: 5,
                            name: 'Кровавые договоры',
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 5,
                            name: 'Кровавые договоры',
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
                            id: 6,
                            name: 'Основы физиологии',
                            time: '14:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 7,
                            name: 'Истинная сущность',
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
                            id: 6,
                            name: 'Основы физиологии',
                            time: '20:00',
                            teacher: {
                                id: 1,
                                name: 'Emiel Regis van der Eretein',
                                role: 'Ректор Академии Ночи',
                            },
                        },
                        second: {
                            id: 7,
                            name: 'Истинная сущность',
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