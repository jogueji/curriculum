import { parse } from 'yaml';
import i18n from './i18n';


interface Curriculum {
	name:        string;
	contactInfo: ContactInfo;
	profile:     string;
	experience:  Experience[];
	education:   Education[];
	courses:     Education[];
	projects:    Project[];
	skills:      Skill[];
}

interface ContactInfo {
	address:  string;
	phone:    string;
	email:    string;
	linkedIn: LinkedIn;
}

interface LinkedIn {
	url:   string;
	label: string;
}

export interface Education {
	institution: string;
	program:     string;
	startDate:   string;
	endDate:     string;
	degree?:     string;
}

export interface Experience {
	organization:     string;
	role:             string;
	startDate:        string;
	endDate:          string;
	responsibilities: string;
}

interface Project {
	organization: string;
	title:        string;
	startDate:    string;
	endDate:      string;
	description:  string;
}

interface Skill {
	label:       string;
	description: string;
}

interface CurriculumState {
	isLoading: boolean,
	curriculum: Curriculum | undefined,
	error: string | undefined
}

type CurriculumAction = 
	{ type: 'get' } |
	{ type: 'success', payload: Curriculum } |
	{ type: 'failed', payload: string }

export const initialState: CurriculumState = {
	isLoading: false,
	curriculum: undefined,
	error: undefined
};

export const curriculumReducer = ( state: CurriculumState, action: CurriculumAction) => {
  switch ( action.type ) {
    case 'get':
      return {
        ...state,
        isLoading: true,
        error: undefined
      }
    case 'success':
      return {
        isLoading: false,
        curriculum: action.payload,
        error: undefined
      }
    case 'failed':
      return {
        isLoading: false,
        curriculum: undefined,
        error: action.payload
      }
		default:
      return state;
  }
}

export async function loadYml(): Promise<any> {
  const response = await fetch(`./locales/curriculum-${i18n.language}.yml`);
  const text = await response.text();
	const data = parse(text);
	return data;
}

