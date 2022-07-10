export interface ICourse{
    id: number;
    name : string;
    subject: {
        name: string;
        grade: number;
        additional_points: number;
    }
    image: string;
    units: number;
    lessons: number;
    topics: number;
    classes: [];
    students: number;
    start_date: string;
    end_date: string;
    preview: boolean;
    manage: boolean;
    grade_submissions: boolean;
    reports: boolean;
    expired: boolean;
    favourite: boolean;
}

export interface IUser{
    id: number;
    school: string;
    state: string;
    district: string;
    username_email: string;
    password: string;
    rememberme: boolean;
}