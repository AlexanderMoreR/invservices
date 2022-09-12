import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    findAll() {
        return { ok: 'findAll'}
    }

    findOne(id: number) {
        return { ok: 'findOne'}
    }

    create() {
        return { ok: 'create'}
    }

    update() {
        return { ok: 'update'}
    }

    remove(id: number) {
        return { ok: 'remove'}
    }

}
