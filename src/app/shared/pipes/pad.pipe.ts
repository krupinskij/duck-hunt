import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'pad'
})
export default class PadPipe implements PipeTransform {
  transform(value: number, length: number = 6): string {
    const valueStr = value > 0 ? String(value) : "";
    return valueStr.padStart(length, "0");
  }
}