import sinon from 'sinon';
import { expect } from 'chai';
import { ErrorTypes } from '../../../erros/catalog';
import CarService from '../../../services/Cars';
import CarModel from '../../../models/Cars';
import { idMock, carMockCreateReturn, carMockCreate, carMockUpdated, idMockLength, carMockDelete } from '../../mocks/car';
import { ZodError } from 'zod';

describe('Testes de Car para camada service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  describe('Verifica a função create', () => {
    it('Função create executada com sucesso', async () => {
      sinon.stub(carModel, 'create').resolves(carMockCreateReturn);
      const response = await carService.create(carMockCreate);
      expect(response).to.be.deep.equal(carMockCreateReturn);
      sinon.restore();
    });

    it('Função create executada com falha', async () => {
      try {
        await carService.create({} as any);
      } catch (e: any) {
        expect(e).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('Verifica a função read', () => {
    it('Função read executada com sucesso', async () => {
      sinon.stub(carModel, 'read').resolves([carMockCreateReturn]);
      const response = await carService.read();
      expect(response).to.be.deep.equal([carMockCreateReturn]);
      sinon.restore();
    });
  });

  describe('Verifica a função readOne', () => {
    it('Função readOne executada com sucesso', async () => {
      sinon.stub(carModel, 'readOne').resolves(carMockCreateReturn);
      const response = await carService.readOne(idMock);
      expect(response).to.be.deep.equal(carMockCreateReturn);
      sinon.restore();
    });

    it('Função readOne executada com falha(id com length menor que 23)', async () => {
      try {
        await carService.readOne('');
      } catch (e: any) {
        expect(e.message).to.be.eq(ErrorTypes.InvalidIdLength)
      }
    });

    it('Função readOne executada com falha(id com length igual a 24)', async () => {
      sinon.stub(carModel, 'readOne').resolves(null);
      try {
        await carService.readOne(idMockLength);
      } catch (e: any) {
        expect(e.message).to.be.eq(ErrorTypes.ObjectNotFound)
      }
      sinon.restore();
    });
  });

  describe('Verifica a função update', () => {
    it('Função update executada com sucesso', async () => {
      sinon.stub(carModel, 'update').resolves(carMockUpdated);
      const response = await carService.update(idMock, carMockCreate);
      expect(response).to.be.deep.equal(carMockUpdated);
      sinon.restore();
    });

    it('Função update executada com falha(id com length menor que 23)', async () => {
      try {
        await carService.update('', carMockCreate);
      } catch (e: any) {
        expect(e.message).to.be.eq(ErrorTypes.InvalidIdLength);
      }
    });

    it('Função update executada com falha(obj inválido)', async () => {
      try {
        await carService.update(idMock, {} as any);
      } catch (e: any) {
        expect(e).to.be.instanceOf(ZodError);
      }
    });

    it('Função update executada com falha(id com length igual a 24)', async () => {
      sinon.stub(carModel, 'update').resolves(null);
      try {
        await carService.update(idMock, carMockCreate);
      } catch (e: any) {
        expect(e.message).to.be.eq(ErrorTypes.ObjectNotFound);
      }
      sinon.restore();
    });
  });

  describe('Verifica a função delete', () => {
    it('Função delete executada com sucesso', async () => {
      sinon.stub(carModel, 'delete').resolves(carMockDelete);
      const response = await carService.delete(idMock);
      expect(response).to.be.deep.equal(carMockDelete);
      sinon.restore();
    });

    it('Função delete com falha(id com length menor que 23)', async () => {
      try {
        await carService.delete('');
      } catch (e: any) {
        expect(e.message).to.be.eq(ErrorTypes.InvalidIdLength);
      }
    });

    it('Função delete executada com falha(id com length igual a 24)', async () => {
      sinon.stub(carModel, 'delete').resolves(null);
      try {
        await carService.delete(idMockLength);
      } catch (e: any) {
        expect(e.message).to.be.eq(ErrorTypes.ObjectNotFound);
      }
      sinon.restore();
    });
  });

})
