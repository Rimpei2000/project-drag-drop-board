/// <reference path='models/drag-drop.ts' />
/// <reference path='models/project.ts' />
/// <reference path='state/project.ts' />
/// <reference path='util/validation.ts' />
/// <reference path='decorators/autobind.ts' />
/// <reference path='components/project-input.ts' />
/// <reference path='components/project-list.ts' />
/// <reference path='components/project-item.ts' />

namespace App {
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
}

