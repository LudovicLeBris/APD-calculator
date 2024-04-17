import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { JsonProject } from '../apd/shared/models/project.model';
import { ProjectService } from '../apd/shared/api/project.service';
import { Observable, first, map, mergeMap, of, take } from 'rxjs';
import { Errormessage } from '../types/error-message';


export const projectsResolver: ResolveFn<{message: string, content: JsonProject[] | Errormessage[]}> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const projecService = inject(ProjectService);

  return projecService.getProjects();
}
