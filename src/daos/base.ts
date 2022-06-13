import Realm from 'realm';

type DeleteType =
  | Realm.Object
  | Realm.Object[]
  | Realm.List<any>
  | Realm.Results<any>
  | any;

const migration = (oldRealm: Realm, newRealm: Realm) => {
  console.log('oldRealm', oldRealm);
  console.log('newRealm', newRealm);
};

export default class BaseDao {
  private static db: Realm | null = null;

  protected get realm(): Realm {
    if (!BaseDao.db) {
      BaseDao.db = new Realm({
        schema: [
          //   GSStudent.schema,
        ],
        schemaVersion: 1,
        migration,
      });
    }

    return BaseDao.db;
  }

  protected close() {
    BaseDao.db && BaseDao.db.close();
    BaseDao.db = null;
  }

  protected delete(items: DeleteType): void {
    try {
      this.realm.delete(items);
    } catch (error) {
      console.info('delete', error);
      // console.info(items);
      throw error;
    }
  }

  protected insert(items: any[], schemaName: string): void {
    items.forEach(item => {
      try {
        this.realm.create(schemaName, item);
      } catch (error) {
        console.info('insert', error);

        throw error;
      }
    });
  }

  protected update(items: any[], schemaName: string): void {
    items.forEach(item => {
      try {
        this.realm.create(schemaName, item, Realm.UpdateMode.Modified);
      } catch (error) {
        console.info('update', error);
        throw error;
      }
    });
  }

  protected execute(callback: () => void) {
    this.realm.write(callback);
  }
}
