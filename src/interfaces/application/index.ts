import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  url: string;
  preview?: string;
  published?: boolean;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  preview?: string;
  company_id?: string;
}
