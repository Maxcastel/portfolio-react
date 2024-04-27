import { Category } from "./Category"
import { Classe } from "./Classe"
import { Framework } from "./Framework"
import { Language } from "./Language"
import { Type } from "./Type"

export interface Project{
    id: number
    title: string
    description: string
    content: string
    url: string
    github: string
    date: string
    thumbnail: string
    frameworks: Framework[]
    languages: Language[]
    type: Type
    category: Category
    classe: Classe
}