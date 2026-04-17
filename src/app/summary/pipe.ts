import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary',
    standalone: true
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit: number = 50): string {
        if (!value) return '';
        return value.length > limit 
            ? value.substring(0, limit) + '...' 
            : value;
    }
}