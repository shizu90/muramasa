export default class Media{
    id: number
    title: string
    averageRating: number
    description: string
    type: string
    subtype: string
    imgSource: string
    totalCount: number
    count: number
    favorited: boolean
    progress: string
    status: string
    startDate: string

    constructor(id: number, title: string, averageRating: number, description: string, type: string, subtype: string, imgSource: string, totalCount: number, count: number, favorited: boolean, progress: string, status: string, startDate: string) {
        this.id = id;
        this.title = title;
        this.subtype = subtype;
        this.averageRating = averageRating;
        this.description = description;
        this.type = type;
        this.imgSource = imgSource;
        this.totalCount = totalCount;
        this.count = count;
        this.favorited = favorited;
        this.progress = progress;
        this.status = status;
        this.startDate = startDate;
    }
}